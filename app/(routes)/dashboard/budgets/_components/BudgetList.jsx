"use client"
import React, { useEffect } from 'react'
import CreateBudget from './CreateBudget'
import Expenses from '../../expenses/[id]/page'
import Budgetitem from './Budgetitem'

function BudgetList() {

/**
 * Use To Get Budget

const [budgetList,setBudgetList]=useState([]);
const {user}=useUser(); 

useEffect(()=>{
  user&&getBudgetList();
},[user])   

  const getBudgetList=async()=>{

    const result=await db.select({
      ...getTableColumns(Budgets),
      totalSpend:sql 'sum(${Expenses.amount})'.mapWith(Number),
      totalItem: sql 'count(${Expenses.id})'.mapWith(Number)
    }).from(Budgets)
    .leftJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
    .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
    .groupBy(Budgets.id);
    setBudgetList(result);
    console.log(result);
  }

*/
  return (
    <div className='mt-7'>
        <div className='grid grid-cols-1
        md:grid-cols-2 lg:grid-cols-3 gap-2'>
            <CreateBudget/>
            <Budgetitem/>
            
        </div>
      
    </div>
  )
}

export default BudgetList
