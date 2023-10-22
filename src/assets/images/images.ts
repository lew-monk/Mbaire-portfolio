import { StaticImageData } from "next/image";
import HustlerFund from "./HustlerFund.png";
import MpesaApp from "./MpesaApp.png";
import ParkingRequest from "./ParkingRequest.png";

const IMAGES: { [key: string]: StaticImageData } = {
  One: MpesaApp,
  Two: HustlerFund,
  Four: ParkingRequest,
};
export { IMAGES };
