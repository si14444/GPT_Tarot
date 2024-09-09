import { majorArcana } from "../constants/majorArcana";

export default function getMajorArcanaName(number: number): string | undefined {
  return majorArcana[number];
}
