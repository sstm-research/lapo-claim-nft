"use client"

function MintButton({ uuid, minted }: { uuid: string; minted: boolean }) {
  const handleClick = async () => {
    console.log(uuid)
  }

  return (
    <button
      disabled={minted}
      className="text-sm text-center w-full p-2 rounded-md bg-zinc-700 text-white"
      onClick={handleClick}
    >
      {minted ? "Mintado" : "Mintar"}
    </button>
  );
}

export default MintButton;
