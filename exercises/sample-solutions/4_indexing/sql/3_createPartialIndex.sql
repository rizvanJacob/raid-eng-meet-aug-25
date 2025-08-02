CREATE INDEX "Appointment_isActive_partial_idx"
ON "Appointment"("branchId", "userId")
WHERE "isActive" = true;