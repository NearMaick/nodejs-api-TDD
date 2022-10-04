import { expect, test } from "vitest";
import { Appointment } from "./Appointment";

test("create an appointment", () => {
  const startsAt = new Date("2022-10-03T03:24:00");
  const endsAt = new Date("2022-10-04T03:24:00");

  const appointment = new Appointment({
    customer: "John Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("John Doe");
});

test("cannot create an appointment with end date before start date", () => {
  const startsAt = new Date("2022-10-04T03:24:00");
  const endsAt = new Date("2022-10-03T03:24:00");

  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});
