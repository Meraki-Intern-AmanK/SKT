"use client"; 

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { LayoutGrid, PiggyBank, ReceiptText, Upload, ShieldCheck } from 'lucide-react'; // Added ShieldCheck back, just in case, and Upload is already there
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation'; 

function SideNav() {

    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutGrid,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Budgets',
            icon: PiggyBank,
            path: '/dashboard/budgets'
        },
        {
            id: 3,
            name: 'Expenses',
            icon: ReceiptText,
            path: '/dashboard/expenses'
        },
        {
            id: 4,
            name: 'Upload Bill',
            icon: Upload, 
            path: '/dashboard/upload-bill' 
        }
    ];

    const path = usePathname(); 

    useEffect(() => {
        
        console.log("Current path:", path);
    }, [path]);

    return (
        <div className='h-screen p-5 shadow-sm border-r flex flex-col justify-between'> 
            <div> 
                <Image
                    src={'/logo.svg'} 
                    alt='logo'
                    width={80}
                    height={100}
                    
                />
                <div className='mt-5'>
                    {menuList.map((menu,index) => ( 
                        <Link href={menu.path}> 
                            <h2
                                className={`flex gap-2 items-center text-gray-500 font-medium mb-5 p-5 cursor-pointer rounded-md
                                           hover:text-primary hover:bg-blue-100
                                           ${path === menu.path ? 'text-primary bg-blue-100' : ''}
                                          `}
                            >
                                <menu.icon className="h-5 w-5" /> 
                                {menu.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>

            
        </div>
    );
}

export default SideNav;