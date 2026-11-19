# Feast

Platforma dystrybucji gier (React + Tailwind) z wersją desktopową na Windows (Electron).
Przycisk „Graj” w aplikacji .exe uruchamia grę przez Twojego klienta Steam, np. GTA V
(`steam://rungameid/271590`). Wymaga to kopii gry zainstalowanej w Steam.

## Zbudowanie .exe na GitHubie (bez instalowania czegokolwiek)

1. Wrzuć wszystkie pliki z tego folderu do nowego repozytorium na GitHubie (gałąź `main`).
2. Wejdź w **Actions**, wybierz **Build Feast .exe**, kliknij **Run workflow**.
3. Po kilku minutach otwórz zakończony przebieg i pobierz **Feast-windows** z sekcji Artifacts.
   Dostaniesz `Feast-1.0.0-portable.exe` (bez instalacji) i `Feast-Setup-1.0.0.exe` (instalator).

### Automatyczny Release

Dodaj tag, a plik `.exe` trafi do zakładki **Releases**:

    git tag v1.0.0
    git push origin v1.0.0

## Wersja przeglądarkowa (GitHub Pages)

W **Settings, Pages** ustaw źródło na **GitHub Actions**. Workflow **Deploy web version to GitHub Pages**
opublikuje `index.html` po każdym pushu na `main`. W przeglądarce „Graj” pokazuje uproszczone mini-gry,
a pełne uruchamianie gier działa tylko w aplikacji .exe.

## Lokalnie

    npm install
    npm start        # uruchom aplikację
    npm run dist     # zbuduj .exe do folderu dist

## Uwagi

- Feast nie zawiera plików gier. Licencję i instalację zapewnia Steam.
- Zakupy i płatności w Feast są symulacją. Logowanie przez Google też.
- Dane (konta, biblioteka) są zapisywane lokalnie na komputerze użytkownika.
