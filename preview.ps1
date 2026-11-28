$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
$rubyBin = 'D:/tools/ruby-academic/rubyinstaller-3.3.12-1-x64/bin'
if (Test-Path $rubyBin) { $env:Path = "$rubyBin;$env:Path" }
$env:GEM_PATH = 'D:/tools/ruby-academic/gems/ruby/3.3.0;D:/tools/ruby-academic/rubyinstaller-3.3.12-1-x64/lib/ruby/gems/3.3.0'
bundle exec jekyll serve --host 127.0.0.1 --port 4000
