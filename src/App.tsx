function App() {
  return (
    <div className="relative flex h-screen max-h-[56.25vw] w-screen items-center">
      <div className="flex h-full w-1/2 items-center justify-center">
        <div className="relative h-[16vw] w-[16vw]">
          <img
            src="https://cdn.koyashiro.net/koyashiro.webp"
            className="h-[15vw] w-[15vw]"
            alt="koyashiro's avatar"
          />
          <div className="absolute left-[-1vw] top-[-1vw] h-[16vw] w-[16vw] border-[0.2vw] border-gray-500" />
          <div className="absolute bottom-[-1vw] right-[-1vw] h-[16vw] w-[16vw] border-[0.2vw] border-gray-500" />
        </div>
      </div>

      <div className="h-1/2 border-l-[0.2vw] border-gray-600" />

      <div className="flex w-1/2 items-center justify-end">
        <div className="h-full w-4/5">
          <div className="text bg-gray-600 pl-[2vw] text-[4vw] text-white">
            koyashiro
          </div>
          <div className="ml-[2vw] text-[3vw] text-gray-500">koyashiro.net</div>
        </div>
      </div>

      <div className="absolute left-[2vw] top-[2vw] h-[2vw] w-[2vw] border-l-[0.2vw] border-t-[0.2vw] border-gray-500" />
      <div className="absolute right-[2vw] top-[2vw] h-[2vw] w-[2vw] border-r-[0.2vw] border-t-[0.2vw] border-gray-500" />
      <div className="absolute bottom-[2vw] left-[2vw] h-[2vw] w-[2vw] border-b-[0.2vw] border-l-[0.2vw] border-gray-500" />
      <div className="absolute bottom-[2vw] right-[2vw] h-[2vw] w-[2vw] border-b-[0.2vw] border-r-[0.2vw] border-gray-500" />
    </div>
  );
}

export default App;
