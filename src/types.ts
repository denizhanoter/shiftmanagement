export type ShiftType = 'morning' | 'evening' | 'night' | 'leave';
export type WeekDay = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export interface ShiftCounts {
  morning: number;
  evening: number;
  night: number;
}

export interface Personnel {
  id: string;
  firstName: string;
  lastName: string;
  preferredShifts: ShiftType[];
  preferredLeaveDays: WeekDay[];
  lastShift: ShiftType | null;
  shiftCounts: ShiftCounts;
  leaveCounts: number;
  lastLeaveDate?: string;
}

export interface ShiftAssignment {
  date: string;
  personId: string;
  shift: ShiftType;
}
