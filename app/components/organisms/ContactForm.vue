<template>
  <div class="rounded-md bg-sidebar-background mt-10">
    <div class="grid grid-cols-1 gap-10 px-10 py-10 md:grid-cols-[260px_1fr]">
      <FormDetails
        title="Contact details"
        label="Something also goes here, so it doesn't look that lonely down here"
      />

      <div class="max-w-lg space-y-5">
        <TextInput
          id="name"
          name="name"
          label="Name, surname"
          type="text"
          required
        />
        <TextInput
          id="email"
          name="email"
          label="E-mail"
          type="email"
          required
        />
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_3fr]">
          <Select
            id="country"
            name="countryCode"
            label="Country code"
            :options="[
              { label: '+371', value: '+371' },
              { label: '+372', value: '+372' },
            ]"
          />
          <TextInput
            id="phone"
            name="phone"
            label="Phone number"
            type="tel"
            required
          />
        </div>
      </div>
    </div>

    <div class="h-px w-full bg-sidebar-divider" />

    <!-- Section 2: Select flight -->
    <div class="grid grid-cols-1 gap-10 px-10 py-10 md:grid-cols-[260px_1fr]">
      <FormDetails
        title="Select flight"
        label="Suspendisse elementum turpis ut volutpat ultricies. Mauris eget nisl diam. In vel felis in metus vulputate imperdiet vestibulum at dolor."
      />

      <!-- Right form fields -->
      <div class="max-w-lg space-y-5">
        <TextInput
          id="flightNumber"
          name="flightNumber"
          label="Flight number"
          type="text"
          required
        />
        <div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-[3fr_3fr_5fr_1fr]">
            <TextInput
              id="flightDate"
              name="flightDate"
              label="Flight date"
              type="number"
              placeholder="DD"
              required
            />
            <TextInput
              id="flightMonth"
              name="flightMonth"
              type="number"
              required
              placeholder="MM"
            />
            <Select
              id="flightYear"
              name="flightYear"
              :options="[
                { label: '2026', value: '2026' },
                { label: '2025', value: '2025' },
                { label: '2024', value: '2024' },
                { label: '2023', value: '2023' },
              ]"
            />
            <div />
          </div>
          <div class="mt-2 text-[11px] text-brand-blue-dark/60">
            For example: <span class="font-medium">30 8 1972</span>
          </div>
        </div>

        <div class="pt-2 flex items-center gap-8">
          <Button label="Add flight" variant="outline" />

          <Button label="Delete flight" variant="ghost" />

          <!-- "outline" | "ghost" | "filled" -->
        </div>
      </div>
    </div>

    <div class="h-px w-full bg-sidebar-divider" />

    <div
      class="grid grid-cols-1 gap-10 px-10 py-10 md:grid-cols-[260px_1fr] mb-10"
    >
      <p class="text-[11px] leading-5 text-brand-blue-dark/60 max-w-sm">
        By submitting this form you agree to airBaltic’s
        <a href="#" class="underline text-brand-blue-dark">Privacy Policy</a>
      </p>

      <div class="max-w-lg space-y-5">
        <Button label="Confirm" variant="filled" size="lg" />
      </div>
    </div>
  </div>
</template>
