enum BookingForms {
  independently = 'independently',
  required = 'required',
  hasRoom = 'hasRoom'
}

export interface IRegistrationInput {
  firstname: string;
  lastname: string;
  middleName: string;
  city: string;
  organization: string;
  position: string;
  academicDegree: string;
  academicGrade: string;
  reportName: string;
  conferenceDirection: string;
  concernForm: string;
  email: string;
  phoneNumber: string;
  address: string;
  booking: BookingForms;
  files: FileList;
}