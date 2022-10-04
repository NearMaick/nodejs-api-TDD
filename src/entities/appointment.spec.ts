import { expect, test } from "vitest";
import { mockDate } from "../test/utils/mockDate";
import { Appointment } from "./Appointment";

test("create an appointment", () => {
  const { twoDaysFuture } = mockDate();

  console.log(new Date());

  const appointment = new Appointment({
    customer: "John Doe",
    startsAt: new Date(),
    endsAt: twoDaysFuture,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("John Doe");
});

test("cannot create an appointment with end date before start date", () => {
  const { oneDayFuture, twoDaysFuture } = mockDate();

  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startsAt: twoDaysFuture,
      endsAt: oneDayFuture,
    });
  }).toThrow();
});

test("cannot create an appointment with end date before now", () => {
  const { oneDayFuture, oneDayPast } = mockDate();

  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startsAt: oneDayFuture,
      endsAt: oneDayPast,
    });
  }).toThrow();
});
