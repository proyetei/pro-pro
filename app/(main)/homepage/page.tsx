
import Homepage from "@/components/Homepage"
import { Metadata } from "next"
import { FC } from "react"

export const metadata: Metadata = {
  title: "Homepage"
}
const page: FC = () => {
    return (
      <Homepage />
    )
  }
export default page;