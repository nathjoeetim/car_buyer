import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardFooter, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";
// import {  } from "./components/ui/card";
import { PiPhoneOutgoingFill } from "react-icons/pi";
import { GiCargoCrane } from "react-icons/gi";
import { BiMoneyWithdraw } from "react-icons/bi";
import styled from "styled-components";
function ContactFormComponent() {
  return (
    <FormContainer className="flex flex-col gap-1">
      <CustomCard className="flex flex-col gap-5 p-2 flex-1 max-sm:w-full w-[400px] h-fit">
        <CardTitle className="text-lg">
          We Would Love To Hear From You
        </CardTitle>
        <NameComponent className="flex flex-row gap-5">
          <div className="flex flex-col w-full items-center gap-1.5">
            <Label htmlFor="first_name">First Name</Label>
            <Input type="text" id="first_name" placeholder="First name" />{" "}
          </div>
          <div className="flex flex-col w-full items-start justify-start gap-1.5">
            <Label htmlFor="last_name">Last Name</Label>
            <Input type="text" id="last_name" placeholder="Last name" />{" "}
          </div>
        </NameComponent>
        <div className="flex flex-col w-full max-w-sm items-start justify-start gap-1.5">
          <Label htmlFor="phone number">Phone Number</Label>
          <Input
            type="number"
            id="phone number"
            placeholder="+1(000) 10020029"
          />{" "}
        </div>
        <div className="flex flex-col w-full max-w-sm items-start justify-start gap-1.5">
          <Label htmlFor="last_name">Address (Street, City, Zip Code)</Label>
          <Input
            type="text"
            id="Adress"
            placeholder="E.g : no.2b Green spring Housing"
          />{" "}
        </div>
        <div className="flex flex-col w-full max-w-sm items-start justify-start gap-1.5">
          <Label htmlFor="Year Of Vehicle ">Year Of Year Of Vehicle </Label>
          <Input
            type="number"
            id="Year_Vehicle "
            placeholder="E.g : 2015"
          />{" "}
        </div>
        <div className="flex flex-col w-full max-w-sm items-start justify-start gap-1.5">
          <Label htmlFor="Vehicle_make ">Make Of Vehicle</Label>
          <Input
            type="text"
            id="Vehicle_make "
            placeholder="Brand of Car E.g BMW"
          />{" "}
        </div>
        <div className="flex flex-col w-full max-w-sm items-start justify-start gap-1.5">
          <Label htmlFor="Vehicle_model">Model Of Vehicle</Label>
          <Input type="text" id="model " placeholder="Model of Car" />{" "}
        </div>
        <div className="flex flex-col items-start w-full gap-1.5">
          <Label htmlFor="message-2">Your Message</Label>
          <Textarea placeholder="Type your message here." id="message-2" />
          <p className="text-sm text-muted-foreground">
            Your message will be copied to the support team.
          </p>
        </div>
        <CardFooter className="flex flex-row w-full justify-end items-center">
          <Button>Submit</Button>
        </CardFooter>
      </CustomCard>
      <ContainerGrid>
        <Card className="p-5 gap-8 w-52">
          <CardTitle>Step 1</CardTitle>
          <CardDescription className="flex flex-col items-center justify-center my-4">
            <PiPhoneOutgoingFill size={35} color="red" />
            <h4 className="mt-5">Call For A Free Quote.</h4>
          </CardDescription>
        </Card>
        <Card className="p-5 gap-0 w-52">
          <CardTitle>Step 2</CardTitle>
          <CardDescription className="flex flex-col items-center justify-center my-4">
            <GiCargoCrane size={35} color="gold" />
            <h4 className="mt-5">Arrange for free car removal.</h4>
          </CardDescription>
        </Card>
        <Card className="p-5 gap-8 w-52">
          <CardTitle>Step 3</CardTitle>
          <CardDescription className="flex flex-col items-center justify-center my-4">
            <BiMoneyWithdraw size={35} color="green" />
            <h4 className="mt-5">Get paid cash at the spot.</h4>
          </CardDescription>
        </Card>
      </ContainerGrid>
    </FormContainer>
  );
}

export default ContactFormComponent;

const CustomCard = styled(Card)`
  @media screen and (max-width: 907px) {
    width: 98%;
    margin: 0 auto;
  }
  @media screen and (max-width: 380px) {
    width: 100%;
    margin: 0;
  }
`;

const NameComponent = styled.div`
  @media screen and (max-width: 380px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContainerGrid = styled.div`
  max-width: 270px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  padding: 10px;
  place-items: center;
`;

const FormContainer = styled.div`
  @media screen and (max-width: 907px) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 706px) {
    display: flex;
    flex-direction: column;
  }
`;
