CREATE OR REPLACE FUNCTION update_is_active()
RETURNS TRIGGER AS $$
BEGIN
  NEW."isActive" := NEW."endDate" >= now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;