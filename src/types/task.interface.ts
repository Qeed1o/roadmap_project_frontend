export interface Task {
  id: string;
  name: string;
  desc?: string;
  isClosed?: boolean;
  isActive?: boolean;
  timeStart?: string;
  timeEnd?: string;
}
