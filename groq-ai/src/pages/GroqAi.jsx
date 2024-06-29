    import Sidebar from "../components/Sidebar";
    import Body from "../components/Body";

    const GroqAi = () => {
      return (
        <>
          <div className="overflow-hidden w-full min-h-screen max-h-fit bg-zinc-900 flex text-white relative">
            <Sidebar />
            <Body />
          </div>
        </>
      );
    };

    export default GroqAi;
