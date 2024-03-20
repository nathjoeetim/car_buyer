import blogimage from "../assets/car-cash.jpg";
import { Card, CardDescription, CardTitle } from "./ui/card";

function BlogComponenet() {
  return (
    <div className="flex flex-col gap-3 w-[98%] mb-5">
      <h4 className="font-bold text-2xl underline">Our Blog</h4>
      <Card className="w-[220px] h-[220px] rounded-sm cursor-pointer">
        <img
          src={blogimage}
          alt="blog image"
          className="w-full h-[50%] rounded-t-md"
        />
        <CardTitle className="text-base p-2">
          How to sell my junk car for cash
        </CardTitle>
        <CardDescription className="p-2">27th march 2023</CardDescription>
      </Card>
    </div>
  );
}

export default BlogComponenet;
