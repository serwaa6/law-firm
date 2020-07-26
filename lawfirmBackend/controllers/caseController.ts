import {cases} from '../data.ts'
import {v4} from "https://deno.land/std/uuid/mod.ts";
import db from '../database/db.ts'

const casesCollection  = db.collection('cases')

// get all cases
export const getAllCases = async ({response}: {response:any}) =>{
    const casesDB = await casesCollection.find();

        response.body = {
            success:true,
            data: casesDB
        }
    }

// add  case
    export const addCase = async (
    {request,response}: {request:any;response:any}
)=>{

    await request.body().value
    .then(async (newIsh :any )=>{
        const newCase = newIsh;
        //insert case in db
        const id = await casesCollection.insertOne(newCase);
        newCase.id = id
        if(!newIsh){
            response.status = 404;
            response.body = {
                success : false,
                msg : 'No data found'
            }
        }else{
            console.log(newCase);
            response.status = 201;
            newCase.id = v4.generate();
            response.body = {
                success : true,
                data: newCase,
            }
        }
    })
    .catch((e: any) =>{
        console.log("there is no data")
    })

}

    export const getOneCase = async ({params,response} : {params: {id:string}; response:any;})=>{
    // const oneCase = cases.find((c)=> c.id === params.id)
        const singleCase = await casesCollection.findOne({
            id:params.id
        })

      if(singleCase){
          response.status = 200;
          response.body={
              success:true,
              data:singleCase
          }
      }else{
          response.status = 404;
          response.body = {
              success : false,
              data : null,
              message: 'No case available like that'
          }
      }

  }

    export const editCase = async ({params,request,response}: {params:{id:string};request: any;response: any;})=>{
        console.log(params.id)
        const caseToBeUpdatad = cases.find((c)=> c.id === params.id)
        if (caseToBeUpdatad) {
            await request.body().value
            .then((val : any)=>{
                const newCases = cases.map((c,key)=>{
                   return c.id === params.id ? {...c , ...val} : c
                })
                response.status = 200;
                response.body = {
                    success:true,
                    data:newCases
                }
            })
            .catch((err:any)=>{
                console.log(err)
            })
        }else{
            response.status = 404;
            response.body ={
                msg:"No case with that ID"
            }
        }
    }

    export const deleteCase = ({params,response}: {params:{id:string};response:any})=>{
        const newCases = cases.filter((a)=>{
            a.id === params.id
        })
        response.status = 200
        response.body = {
            success:true,
            msg:'case deleted successfully'
        }
    }
