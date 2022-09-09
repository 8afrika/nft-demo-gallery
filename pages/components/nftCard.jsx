import { FaRegCopy } from 'react-icons/fa'

export const NFTCard = ({ nft }) => {
  const copy = () => {
    var copyText = nft.contract.address

    navigator.clipboard.writeText(copyText.value)
    alert('Copied the text: ' + copyText.value)
  }

  return (
    <div className="flex w-1/4 flex-col ">
      <div className="rounded-md">
        <img
          className="h-128 w-full rounded-t-md object-cover"
          src={nft.media[0].gateway}
        ></img>
      </div>
      <div className="y-gap-2 h-110 flex flex-col rounded-b-md bg-slate-100 px-2 py-3 ">
        <div className="">
          <h2 className="text-xl text-gray-800">{nft.title}</h2>
          <p className="text-gray-600">
            Id: {nft.id.tokenId.substr(nft.id.tokenId.length - 4)}
          </p>
          <div className="flex flex-row">
            <p
              id="text-to-copy"
              className="text-gray-600"
            >{`${nft.contract.address.substr(
              0,
              4
            )}...${nft.contract.address.substr(
              nft.contract.address.length - 4
            )}`}</p>
            <button
              className="w-1/2 cursor-pointer fill-current px-4 text-blue-500 "
              onClick={() => copy()}
            >
              {<FaRegCopy />}
            </button>
          </div>
        </div>

        <div className="mt-2 flex-grow">
          <p className="text-gray-600">{nft.description?.substr(0, 150)}</p>
        </div>

        <div className="mb-1 flex justify-center">
          <a
            target={'_blank'}
            href={`https://etherscan.io/token/${nft.contract.address}`}
            className="rounded-m w-1/2 cursor-pointer bg-blue-500 py-2 px-4 text-center text-white"
          >
            View on etherscan
          </a>
        </div>
      </div>
    </div>
  )
}
