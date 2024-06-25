import Link from "next/link"

export const NotAuthenticated = () => {
  return (
    <div className="w-full h-screen flex-col-center">
        <div>
            image
        </div>
        <h1 className="text-xxl text-primary-40 font-bold">Whoops!</h1>
        <p className="font-bold text-black text-s">¿What to do?</p>
        <div className="flex-row-center gap-5 my-4">
            <Link href='/' className="bg-neutral-60 hover:bg-neutral-50 rounded px-6 py-[10px] text-white">Go to home</Link>
            <Link href='/auth/login' className="bg-primary-40 hover:bg-primary-30 rounded px-6 py-[10px] text-white">Get started</Link>
        </div>
    </div>
  )
}