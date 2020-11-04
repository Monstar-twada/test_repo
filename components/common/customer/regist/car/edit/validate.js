/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-23 16:12
 */
export const FORM_RULES = {
  registrationNumber: 100,
  maker: 255,
  carType: 255,
  grade: 255,
  landTransportOffice: 20,
  carRegistrationNumberType: 10,
  carRegistrationNumberKana: 2,
  carRegistrationNumber: 10,
  carMileage: [{ max: 10 }, { validator: halfWidthNumber }],
  retailPrice: 30,
  assessmentAmount: 30,
  paymentType: 30,
  creditCompany: 50,
  numberOfPayment: 10,
  repaymentMonthly: 30,
  bonusDate: 30,
  aiAssessmentAmount: 30,
  estimatedPrice: 30,
  balancePayment: 30,
  carTax: [{ max: 8 }, { validator: halfWidthNumber }],
  libilityInsurance: [{ max: 8 }, { validator: halfWidthNumber }],
  weightTax: [{ max: 8 }, { validator: halfWidthNumber }],
  recycleFee: [{ max: 8 }, { validator: halfWidthNumber }],
  monthlyGasolineCost: [{ max: 8 }, { validator: halfWidthNumber }],
  carInsuranceFee: [{ max: 8 }, { validator: halfWidthNumber }],
  monthlyParkingFee: [{ max: 8 }, { validator: halfWidthNumber }],
  chassisNumber: 30,
  carInspectionType: 30,
  engineType: 30,
  engineMaximumOutput: 30,
  engineTorque: 30,
  tireSizeFront: 30,
  tireSizeRear: 30,
  tireCreateYear: 4,
  tireCreateWeek: 4,
  batterySize: 30,
  fuelTankSize: 30,
  colorCodeType: 30,
  colorTrimCode: 30,
  model: 30,
  salesPeriodStart: 30,
  warrantyPeriodEnd: 30,
  fuelEconomy: 30,
  carWeight: 30,
  carFullLength: 30,
  carFullWidth: 30,
  carTotalHeight: 30,
};

function halfWidthNumber(value) {
  if (value && !/^\d+$/.test(value)) {
    return '半角数値のみ';
  }
  return null;
}
