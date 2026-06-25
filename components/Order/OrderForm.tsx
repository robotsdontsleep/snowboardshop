"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface OrderFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-6 w-full max-w-xl text-textColor"
    >
      <Card className="flex flex-col gap-4 p-6 bg-panelBg">
        <h3 className="text-lg font-black">Kontakt</h3>
        <InputField
          type="email"
          name="email"
          placeholder="E-Mail-Adresse"
          required
        />
      </Card>

      <Card className="flex flex-col gap-4 p-6 bg-panelBg">
        <h3 className="text-lg font-black">Lieferadresse</h3>

        <InputField
          type="text"
          name="fullName"
          placeholder="Vollständiger Name"
          required
        />

        <InputField
          type="text"
          name="street"
          placeholder="Straße und Hausnummer"
          required
        />

        <div className="grid grid-cols-3 gap-4">
          <InputField
            type="text"
            name="postalCode"
            placeholder="PLZ"
            required
          />
          <div className="col-span-2">
            <InputField
              type="text"
              name="city"
              placeholder="Ort"
              required
            />
          </div>
        </div>

        <InputField
          type="text"
          name="country"
          placeholder="Land"
          defaultValue="Germany"
          required
        />
      </Card>

      <Card className="flex flex-col gap-4 p-6 bg-panelBg">
        <h3 className="text-lg font-black">Zahlung</h3>

        <InputField type="text" placeholder="Kartennummer" required />

        <div className="grid grid-cols-2 gap-4">
          <InputField type="text" placeholder="MM / JJ" required />
          <InputField type="text" placeholder="CVC" maxLength={3} required />
        </div>
      </Card>

      <Button
        title="Bestellen"
        type="submit"
        className="px-6 py-3 w-full rounded-xl text-paragraph"
      />
    </form>
  );
}

function InputField({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full h-12 px-4 rounded-xl bg-inputBg border border-textColor/5 text-sm text-textColor placeholder:text-textColor/30 focus:outline-none focus:border-brandColor/50 transition-all ${className}`}
      {...props}
    />
  );
}
