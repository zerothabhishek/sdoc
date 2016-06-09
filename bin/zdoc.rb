##!/usr/bin/ruby -KU
require File.expand_path('../../lib/sdoc.rb', __FILE__)

begin

  ## Generate the rdoc
  ARGV.unshift('--format=sdoc')
  r = RDoc::RDoc.new
  r.document ARGV

rescue SystemExit
  raise
rescue Exception => e
  if $DEBUG_RDOC then
    $stderr.puts e.message
    $stderr.puts "#{e.backtrace.join "\n\t"}"
    $stderr.puts
  elsif Interrupt === e then
    $stderr.puts
    $stderr.puts 'Interrupted'
  else
    $stderr.puts "uh-oh! RDoc had a problem:"
    $stderr.puts e.message
    $stderr.puts
    $stderr.puts "run with --debug for full backtrace"
  end

  exit 1
end
