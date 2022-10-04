import { Appointment } from "../../entities/Appointment";
import { AppointmentsRepository } from "../AppointmentsRepository";

export class InMemoryAppointmentsRepository implements AppointmentsRepository {
  public items: Appointment[] = [];

  async create(appointment: Appointment): Promise<void> {
    this.items.push(appointment);
  }

  async findOverlappingAppointment(
    startsAt: Date,
    endsAt: Date
  ): Promise<Appointment | null> {
    const startsDate = startsAt.getTime();
    const endsDate = endsAt.getTime();

    const overlappingAppointment = this.items.find((item) => {
      const itemStartsDate = item.startsAt.getTime();
      const itemEndsDate = item.endsAt.getTime();

      if (startsDate >= itemStartsDate || startsDate <= itemEndsDate) {
        return item;
      }
    });

    console.log({ overlappingAppointment });

    if (!overlappingAppointment) {
      return null;
    }

    return overlappingAppointment;
  }
}
