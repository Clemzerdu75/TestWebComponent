import { Component, h, Event, EventEmitter } from "@stencil/core";

/* 

This component is first of all a link component, which drive users to certain part of the website:
There are 4 links inside you can access by the "buttonToggle" event.
The 4 links can be found and seperated by the event.detail value:
  - Link to profil Page has the value "Profil"
  - Link to help has the value "Help" 
  - Link to log out has the value "LogOut"

*/

@Component({
  tag: "mr-profil-button",
  styleUrl: "mr-profil-button.scss",
  assetsDirs: ["assets"],
  shadow: true,
})
export class MrProfilButton {
  /* Event handling: The event buttonToggle is created and handleClick will be call by button to emit the event */
  @Event() buttonToggle: EventEmitter;

  private handleClick(name) {
    /* The name property is set in the button onClick to differenciate the different links */
    this.buttonToggle.emit(name);
  }

  render() {
    return (
      <div class="Wrapper">
        {/* Main Button (what you see when the component is unused) */}
        <div class="MainButtonWrapper">
          <h2>CF</h2>
        </div>

        {/* Secondary buttons (which appear when you hover the main button) contain the link to user profil, help and log out */}
        <div class="OtherButtonWrapper">
          {/* All of this button are "little-button" web component you can find in the lib, they takes svg as slot to show their usage */}

          {/* Profil Button */}
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

          {/* Help Button */}
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

          {/* Logout Button */}
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
