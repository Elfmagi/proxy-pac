function FindProxyForURL(url, host) {


//  debugPAC ="PAC Debug Information\n";
//  debugPAC +="-----------------------------------\n";
//  debugPAC +="Machine IP: " + myIpAddress() + "\n";
//  debugPAC +="Hostname: " + host + "\n";
//  if (isResolvable(host)) {resolvableHost = "True"} else {resolvableHost = "False"};
//  debugPAC +="Host Resolvable: " + resolvableHost + "\n";
//  debugPAC +="Hostname IP: " + dnsResolve(host) + "\n";
//  if (isPlainHostName(host)) {plainHost = "True"} else {plainHost = "False"};
//  debugPAC +="Plain Hostname: " + plainHost + "\n";
//  debugPAC +="Domain Levels: " + dnsDomainLevels(host) + "\n";
//  debugPAC +="URL: " + url + "\n";
//  // Protocol can only be determined by reading the entire URL.
//  if (url.substring(0,5)=="http:") {protocol="HTTP";} else
//      if (url.substring(0,6)=="https:") {protocol="HTTPS";} else
//          if (url.substring(0,4)=="ftp:") {protocol="FTP";}
//                else {protocol="Unknown";}
//    debugPAC +="Protocol: " + protocol + "\n";
//    alert(debugPAC);
//

  // Pass a couple of sites direct.
  if (shExpMatch(host, "*debian.mg.k12.mo.us") || shExpMatch(host, "*.cms.hhs.gov")) {
    return "DIRECT";
  }

  // Test here for on campus or not rule and default all IPV6 to on campus. 
  if (shExpMatch(myIpAddress(), "*:*") || isInNet(myIpAddress(), "172.16.0.0", "255.255.0.0") || isInNet(myIpAddress(), "10.0.0.0", "255.0.0.0") || isInNet(myIpAddress(), "192.168.0.0", "255.255.0.0") || isInNet(myIpAddress(), "127.0.0.0", "255.0.0.0")) { 
    // On campus so have browser use our proxy.
    // alert("On campus network with local IP address: " + myIpAddress());
    return "PROXY 172.16.0.1:3128";
  } else {
    // If out of campus just assume to run direct.
    // alert("Off campus network with local IP address: " + myIpAddress());
    return "DIRECT"; 
  }


  // Use a different proxy for each protocol.  
  // if (shExpMatch(url, "http:*"))  return "PROXY 172.16.0.1:3128";
  // if (shExpMatch(url, "https:*")) return "PROXY 172.16.0.1:3128";
  // if (shExpMatch(url, "ftp:*")) return "PROXY 172.16.0.1:3128";

  // If we get here just run direct.
  // return "DIRECT"; 

}
