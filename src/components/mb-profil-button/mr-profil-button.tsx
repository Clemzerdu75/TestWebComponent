import { Component, h, getAssetPath, Event, EventEmitter } from "@stencil/core";

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
            <img src={getAssetPath(`./assets/user.svg`)} alt="Profil" />
          </mr-little-button>

          <mr-little-button class="Help" onClick={() => this.handleClick("Help")}>
            <img src={getAssetPath(`./assets/help.svg`)} alt="Help" />
          </mr-little-button>

          <mr-little-button class="LogOut" onClick={() => this.handleClick("LogOut")}>
            <img src={getAssetPath(`./assets/log-out.svg`)} alt="logOut" />
          </mr-little-button>
        </div>
      </div>
    );
  }
}
