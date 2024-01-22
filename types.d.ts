export type Task = {
  id: number;
  title: string;
  description: string;
  createdOn: Date;
  deadline: Date | null;
  status: string;
};
