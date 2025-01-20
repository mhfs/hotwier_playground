# frozen_string_literal: true

class DrawerComponent < ViewComponent::Base
  include Turbo::FramesHelper

  renders_one :footer

  def initialize(title:, size: :medium, previous_url:, confirm: false, confirm_message: nil)
    @title = title
    @previous_url = previous_url
    @size = size
    @confirm = confirm
    @confirm_message = confirm_message
  end

  def wrap_in_turbo_frame(&block)
    if helpers.turbo_frame_request?
      turbo_frame_tag "drawer-frame", &block
    else
      render DrawerFrameComponent.new(size: @size, previous_url: @previous_url, confirm: @confirm, confirm_message: @confirm_message) do
        capture(&block)
      end
    end
  end
end
