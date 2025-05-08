export interface IVacancy {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  requirements: string[];
  postedDate: string; // También puedes usar Date si vas a formatearlo con pipes
}
