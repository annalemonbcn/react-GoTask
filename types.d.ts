export type Task = {
  title: string;
  description: string;
  createdOn: Date;
  deadline: Date | null;
  status: string;
};
