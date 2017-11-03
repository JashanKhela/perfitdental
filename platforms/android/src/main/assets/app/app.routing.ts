import { setupPage } from "./pages/setup/setup.component";
import { profPage} from "./pages/professionals/prof.component";
import { patientPage} from "./pages/patient/patient.component";

export const routes = [
  { path: "", component: setupPage },
  {path: "prof",component: profPage},
  {path: "patient",component: patientPage}
];

export const navigatableComponents = [
  setupPage,
  profPage,
  patientPage,
];