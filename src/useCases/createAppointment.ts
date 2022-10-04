import { Appointment } from "../entities/Appointment";

interface CreateAppointmentRequest {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

type CreateAppointmentResponse = Appointment;

export class CreateAppointment {
  async execute(
    request: CreateAppointmentRequest
  ): Promise<CreateAppointmentResponse> {
    const { customer, startsAt, endsAt } = request;

    const appointment = new Appointment({
      customer,
      startsAt,
      endsAt,
    });

    return appointment;
  }
}
