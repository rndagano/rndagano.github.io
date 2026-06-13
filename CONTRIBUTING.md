# Contributing

## Commit messages — Conventional Commits

This repository follows the [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
specification. Each commit message must be structured as:

```
<type>(<optional scope>): <short summary>

<optional body>

<optional footer>
```

### Allowed types

| Type       | Use for                                            |
|------------|----------------------------------------------------|
| `feat`     | A new feature                                      |
| `fix`      | A bug fix                                           |
| `docs`     | Documentation only                                 |
| `style`    | Formatting; no code/content change                 |
| `refactor` | Change that neither fixes a bug nor adds a feature |
| `perf`     | Performance improvement                            |
| `test`     | Adding or fixing tests                             |
| `build`    | Build system or dependencies (`Gemfile`, plugins)  |
| `ci`       | CI configuration                                   |
| `chore`    | Maintenance, tooling, `.gitignore`, etc.           |
| `content`  | Blog post / page content                           |

- Use the **imperative mood** ("add", not "added").
- Keep the summary line under ~72 characters.
- Mark breaking changes with `!` (`feat!: ...`) or a `BREAKING CHANGE:` footer.

### Examples

```
fix(config): set baseurl to empty for user page URLs
build(plugins): enable jekyll-seo-tag and jekyll-sitemap
content(about): replace boilerplate with personal bio
chore: ignore .idea/ and Ruby build artifacts
```

### Optional: use the commit template

A `.gitmessage` template ships with this repo. Enable it once locally so it
pre-fills every `git commit`:

```sh
git config commit.template .gitmessage
```

## Local development

```sh
bundle install
bundle exec jekyll serve
```

The site is then available at <http://localhost:4000>.
