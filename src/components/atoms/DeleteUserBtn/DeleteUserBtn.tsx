'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React from 'react'
import { NextPublicApiUrl } from "@/shared/env";

export const DeleteUserBtn = ({id}: {id: number}) => {
    const router = useRouter();
    const handleAction = async () => {
        const res = await axios.delete(`${NextPublicApiUrl}/api/users/delete/${id}`)
        if (res.status === 200) {
            alert('User deleted')
            router.refresh();
        } else {
            alert('Failed to delete user')   
        }
    }
    return (
        <button className="p-1 rounded bg-red-500 text-white" onClick={handleAction}>Delete</button>
    )
}