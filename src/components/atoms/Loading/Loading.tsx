export const Loading = () => {
    return (
      <div className="flex-col-center h-screen">
          <div className="relative">
              <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-groween"></div>
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-green-groween animate-spin"></div>
          </div>
          <h1 className="text-xl mt-5">Cargando</h1>
      </div>
    )
  }