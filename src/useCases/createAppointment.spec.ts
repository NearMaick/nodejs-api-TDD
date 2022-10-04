import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/Appointment";
import { mockDate } from "../test/utils/mockDate";
import { CreateAppointment } from "./createAppointment";

describe("Create Appointment", () => {
  it("should be able to create an appointment", () => {
    const createAppointment = new CreateAppointment();

    const { oneDayFuture, twoDaysFuture } = mockDate();

    expect(
      createAppointment.execute({
        customer: "John Doe",
        startsAt: oneDayFuture,
        endsAt: twoDaysFuture,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });
});
