import { Component, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "mr-profil-button",
  styleUrl: "mr-profil-button.scss",
  assetsDirs: ["assets"],
  shadow: true,
})
export class MrProfilButton {
  @Event() buttonToggle: EventEmitter;

  private handleClick(name) {
    this.buttonToggle.emit(name);
  }
  render() {
    return (
      <div class="Wrapper">
        <div class="MainButtonWrapper">
          <h2>CF</h2>
        </div>
        <div class="OtherButtonWrapper">
          <mr-little-button class="Profil" onClick={() => this.handleClick("Profil")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#42c19A"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </mr-little-button>

          <mr-little-button class="Help" onClick={() => this.handleClick("Help")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#42c19a"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-help-circle"
            >
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </mr-little-button>

          <mr-little-button class="LogOut" onClick={() => this.handleClick("LogOut")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#EC4E65"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-log-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </mr-little-button>
        </div>
      </div>
    );
  }
}
