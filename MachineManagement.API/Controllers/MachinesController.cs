using Microsoft.AspNetCore.Mvc;
using MachineManagement.API.Models;
using MachineManagement.API.Services; 

[ApiController]
[Route("api/[controller]")]
public class MachinesController : ControllerBase
{
    private readonly IMachineService _machineService;

        public MachinesController(IMachineService machineService)
    {
        _machineService = machineService;
    }

    [HttpGet]
    public IActionResult GetMachines([FromQuery] string? status)
    {
        var machines = _machineService.GetAllMachines(status);
        return Ok(machines);
    }

    [HttpPost]
    public IActionResult CreateMachine([FromBody] Machine machine)
    {
        var createdMachine = _machineService.CreateMachine(machine);
        return CreatedAtAction(nameof(GetMachineById), new { id = createdMachine.Id }, createdMachine);
    }

    [HttpGet("{id}")]
    public IActionResult GetMachineById(Guid id)
    {
        var machine = _machineService.GetMachineById(id);
        if (machine == null)
        {
            return NotFound();
        }
        return Ok(machine);
    }

    // DTO para a telemetria
    public record TelemetryUpdate(string Location, string Status);

    [HttpPut("{id}/telemetry")]
    public IActionResult UpdateTelemetry(Guid id, [FromBody] TelemetryUpdate data)
    {
        var machineToUpdate = _machineService.GetMachineById(id);
        if (machineToUpdate == null)
        {
            return NotFound(); 
        }

        _machineService.UpdateMachineTelemetry(id, data.Location, data.Status);
        return NoContent();
    }
}