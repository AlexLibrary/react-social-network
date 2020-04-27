import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("Status from props should be in the state", () => {
    const component = create(<ProfileStatus status="Samuraiii" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Samuraiii");
  });
  test('After creation <span> with status should be displayed with correct status', () => {
    const component = create(<ProfileStatus status="Samuraiii" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children.length).not.toBeNull();
  });
  test('After creation <input> should`t be displayed', () => {
    const component = create(<ProfileStatus status="Samuraiii" />);
    const root = component.root;
    expect(() => {
      return root.findByType("input")
    }).toThrow();
  });
  test('After creation <span> with status should be displayed with correct status', () => {
    const component = create(<ProfileStatus status="Samuraiii" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.props.children).toBe("Samuraiii");
  });
  test('Input should be displayed in editMode instead of span', () => {
    const component = create(<ProfileStatus status="Samuraiii" />);
    const root = component.root;
    const span = root.findByType("span");
    span.parent.props.onClick();
    const input = root.findByType("input")
    expect(input.props.value).toBe("Samuraiii");
  });
  test('Callback should be called', () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status="Samuraiii" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.handleDeactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
