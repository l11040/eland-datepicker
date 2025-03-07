import { Meta, StoryObj } from "@storybook/react";
import DatePicker from "../../components/DatePicker";
import { useDatePickerState } from "../../hooks/useDatePickerState";
import { useEffect, useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  args: {
    selectedDate: new Date(),
    rangeDate: { startDate: null, endDate: null },
  },
  argTypes: {
    selectedDate: { control: { type: "date" } },
    rangeDate: { control: { type: "object" } },
    onChange: { action: "date changed" },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: (args) => {
    const initialDate = args.selectedDate ? new Date(args.selectedDate) : null;
    const [controlledDate, setControlledDate] = useState<Date | null>(
      initialDate
    );

    // ✅ Storybook Controls에서 `selectedDate` 변경 시 내부 상태 반영
    useEffect(() => {
      setControlledDate(initialDate);
    }, [args.selectedDate]);

    // ✅ `useDatePickerState`를 활용하여 내부 상태를 관리
    const { selectedDate: pickerDate, handleDateChange } =
      useDatePickerState(controlledDate);

    // ✅ `handleChange`에서 Storybook Controls의 값도 업데이트
    const handleChange = (date: Date | null) => {
      handleDateChange(date);
      setControlledDate(date);
      args.onChange?.(date); // ✅ Storybook Controls 패널에도 반영
    };

    return (
      <DatePicker {...args} selectedDate={pickerDate} onChange={handleChange} />
    );
  },
};
