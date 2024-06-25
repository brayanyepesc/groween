'use client'

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import { Loading } from "@/components/atoms";
import { NotAuthenticated } from "../NotAuthenticated/NotAuthenticated";

interface Props {
    children: React.ReactNode;
  }

export const ProtectRoutes = ({ children, ...rest }: Props) => {
    const { data: session } = useSession();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      session ? setLoading(false) : setLoading(true);
    }, [session])
    if (loading) {
      return (
        <Loading />
      )
    }
    return (
      <>
          {
              session ? children : (<NotAuthenticated />)
          }
      </>
    )
}