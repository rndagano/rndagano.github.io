source "https://rubygems.org"

# Standalone Jekyll 4 — no longer the `github-pages` gem. The site is built and
# deployed by GitHub Actions (.github/workflows/jekyll.yml), not the classic
# Pages branch builder. Run locally with `bundle exec jekyll serve`.
gem "jekyll", "~> 4.3"
gem "jekyll-theme-cayman", "~> 0.2"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem.
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Built-in dev server for `jekyll serve`; left Ruby's default gems in 3.0+.
gem "webrick", "~> 1.8"

# Former stdlib gems removed from Ruby's defaults in 3.4+ (needed on Ruby >= 3.4).
gem "csv"
gem "base64"
gem "logger"
gem "bigdecimal"
