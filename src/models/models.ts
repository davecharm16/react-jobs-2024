export interface Jobs {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: Company
}


export interface Company{
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
};

export interface JobForm {
  type : string,
  title : string,
  description : string,
  salary : string,
  location : string,
  company : string,
  company_description : string, 
  contact_email : string,
  contact_phone : string,
}


export interface Job {
  id: string,
  type : string,
  title : string,
  description : string,
  salary : string,
  location : string,
  company : Company
}
