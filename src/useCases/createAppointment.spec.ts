import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/Appointment";
import { CreateAppointment } from "./createAppointment";

describe("Create Appointment", () => {
  it("should be able to create an appointment", () => {
    const createAppointment = new CreateAppointment();

    const startsAt = new Date("2022-10-03T03:24:00");
    const endsAt = new Date("2022-10-04T03:24:00");

    expect(
      createAppointment.execute({
        customer: "John Doe",
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });
});
