import { X, Youtube } from "lucide-react"

const CopyRight = () => {
  return (
    <div className="flex justify-between border-t-2 py-4 md:px-16 lg:px-32">
        <p> &copy; 2020 Africa to Silicon Valley, Inc. All Rights Reserved. </p>
        <div className="flex space-x-4">
            <X />
            <Youtube /> 

        </div>
    </div>
  )
}

export default CopyRight
