import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/Appointment";
import { InMemoryAppointmentsRepository } from "../repositories/inMemory/InMemoryAppointmentsRepository";
import { mockDate } from "../test/utils/mockDate";
import { CreateAppointment } from "./createAppointment";

describe("Create Appointment", () => {
  it("should be able to create an appointment", () => {
    const appointmentsRepository = new InMemoryAppointmentsRepository();
    const createAppointment = new CreateAppointment(appointmentsRepository);

    const { oneDayFuture, twoDaysFuture } = mockDate();

    expect(
      createAppointment.execute({
        customer: "John Doe",
        startsAt: oneDayFuture,
        endsAt: twoDaysFuture,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });

  it("should not be able to create an appointment with overlapping dates", async () => {
    const {
      oneDayFuture,
      twoDaysFuture,
      threeDaysFuture,
      fourDaysFuture,
      fiveDaysFuture,
    } = mockDate();

    const appointmentsRepository = new InMemoryAppointmentsRepository();
    const createAppointment = new CreateAppointment(appointmentsRepository);

    await createAppointment.execute({
      customer: "John Doe",
      startsAt: twoDaysFuture,
      endsAt: fourDaysFuture,
    });

    await expect(
      createAppointment.execute({
        customer: "John Doe",
        startsAt: threeDaysFuture,
        endsAt: fourDaysFuture,
      })
    ).rejects.toBeInstanceOf(Error);

    await expect(
      createAppointment.execute({
        customer: "John Doe",
        startsAt: oneDayFuture,
        endsAt: threeDaysFuture,
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
