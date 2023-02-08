import React,{useState} from "react";
import * as Users from "../usersdb";
import MaterialTable from "@material-table/core"

export default function EditableTable(){
    const [data, setData] = useState(Users.users);
    const [addIsClicked, setAddIsClicked]= useState(false)
    const columns = [{title:'Name',field:'username',
                    validate: rowData =>Users.name_validator(rowData.username) ? { isValid: false, helperText: 'Name cannot be empty' }: true},
                      {title:'Email',field:'email', editable:'onAdd',
                    validate: rowData =>validatenewUser(rowData) ? { isValid: false, helperText: validatenewUser(rowData) }: true},
                      {title:'Password',field:'password',
                    validate:rowData => Users.password_validator(rowData.password)?{isValid:false,helperText:Users.password_validator(rowData.password)}:true}
                    ]
    function validatenewUser(newData){
      if(Users.email_validator(newData.email))return Users.email_validator(newData.email)
      if(!addIsClicked) return 
      if(data.find(user =>user.email=== newData.email.toLowerCase() )) //email in use
        return "Email already exists"
    }

    return(
        <div>
        <MaterialTable
          title ="Users Data"
          columns={columns}
          data ={data}
          editable ={{
            onRowAdd: newData =>new Promise((resolve,reject)=>{
              setTimeout(()=>{
                newData = {...newData,email:newData.email.toLowerCase()}
                const res = Users.addUser(newData)
                console.log(res,"response")
                if(res.status === 201){
                  setData(prevData =>[...prevData,newData])
                  resolve()
                }
                else {
                  setAddIsClicked(true)
                  reject()}
              },1000)
              setAddIsClicked(false)
            }),
            onRowDelete: selectedRow =>new Promise((resolve,resject)=>{
              setTimeout(()=>{
                Users.deletUser(selectedRow)
                setData(prevData=>prevData.filter((user)=>user.email!== selectedRow.email));
                resolve();
              },1000)
            }),
            onRowUpdate: (updatedData,oldData) => new Promise((resolve,reject)=>{
              setTimeout(() => {
                const index = oldData.tableData.id
                Users.editUser(updatedData)
                setData(prevData => prevData.map((user,i)=>{
                  if(i===index){
                  return updatedData}
                  else return user
                }))
                resolve();
              }, 1000)
            })
          }} 
          options={{
            actionsColumnIndex:-1,
            addRowPosition:'first'         
          }}
        />
      </div>
    )

}
/**
 * on 1st run Add users displays from db and state (a row is displayed twice)
 */