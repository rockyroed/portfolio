{
  description = "rockyroed/portfolio shell flake";

  inputs = {
    nixpkgs = {
      url = "github:NixOS/nixpkgs/nixos-unstable";
    };
  };

  outputs = { self, nixpkgs }: 
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          pnpm
          zsh
          nodePackages.nodejs
          nodePackages.tailwindcss
        ];

        shellHook = ''
          # Use zsh as the default shell
          export SHELL=${pkgs.zsh}/bin/zsh
          exec ${pkgs.zsh}/bin/zsh
        '';
      };
    };
}
