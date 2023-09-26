import validator from "./classes/validator";
import cardType from "./classes/cardType";

const vld = new validator();
vld.addValid();

const crdType = new cardType();
crdType.currCard();
